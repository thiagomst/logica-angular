// /**
//  * GET /admin/report-driver
//  */
// async getDriverReport({ auth, request, response }) {
//   try {
//     const XLSX = require("xlsx");
//     const moment = require("moment");

//     let idUser = 0;
//     if (request.header("idUser")) {
//       idUser = parseInt(request.header("idUser"));
//     } else if (auth.user) {
//       idUser = auth.user.id;
//     }

//     if (!idUser) {
//       response.status(404);
//       return response.json({ error: "ID de usuário não informado!" });
//     }

//     const { dateStart, dateEnd } = request.get();

//     // Consulta filtrando por motorista
//     const services = (await Service.query()
//       .where("idUser", idUser)
//       .whereBetween("wp_delivery_date", [
//         `${dateStart} 00:00:00`,
//         `${dateEnd} 23:59:59`,
//       ])
//       .with("address", (a) => {
//         a.select(
//           "id",
//           "idService",
//           "zipCode",
//           "state",
//           "city",
//           "district",
//           "address",
//           "number",
//           "complement"
//         );
//       })
//       .with("availability", (r) => {
//         r.with("scheduling", (s) => {
//           s.with("zipCodeTrack", (z) => {
//             z.select("id", "name");
//           });
//           s.select();
//         });
//         r.select("id", "idService", "idAvailabilityScheduling");
//       })
//       .select(
//         "service.id",
//         "registrationNumber",
//         "wp_customer_name",
//         "wp_delivery_date",
//         "wp_delivery_time"
//       )
//       .orderBy("wp_delivery_date_time", "ASC")
//       .fetch()).toJSON();

//     // Montagem do Excel só com colunas do motorista
//     const prepareXLSX = services.map((item) => ({
//       "N° de Inscrição": item.registrationNumber,
//       "Data":
//         item.wp_delivery_date === "0000-00-00 00:00:00"
//           ? ""
//           : moment(item.wp_delivery_date).format("DD/MM/YYYY"),
//       "Horário": item.wp_delivery_time,
//       "Nome Completo": item.wp_customer_name,
//       "Disponibilidade":
//         item.availability?.scheduling?.zipCodeTrack?.name || "",
//       "Endereço": item.address?.address || "",
//       "Número": item.address?.number || "",
//       "Complemento": item.address?.complement || "",
//       "Bairro": item.address?.district || "",
//       "Cidade / Estado": item.address
//         ? `${item.address.city} (${item.address.state})`
//         : "",
//       "CEP": item.address?.zipCode || "",
//     }));

//     const worksheet = XLSX.utils.json_to_sheet(prepareXLSX);
//     const wb = XLSX.utils.book_new();
//     const fileName = `DriverReport_${moment().format("DD-MM-YYYY_HH-mm-ss")}.xlsx`;

//     XLSX.utils.book_append_sheet(wb, worksheet, "Relatório de entregas");
//     const buf = XLSX.write(wb, { type: "buffer", bookType: "xlsx" });

//     response.header(
//       "Content-Disposition",
//       `attachment; filename=${fileName}`
//     );
//     response.header(
//       "Content-Type",
//       "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
//     );
//     response.send(buf);
//   } catch (error) {
//     response.status(500).json({ error: error.message });
//   }
// }



/**
 * Get nurse report services
 * Generate Excel file with nurse service data
 * GET /admin/report-nurse
 *
 * @param {object} ctx
 * @param {Request} ctx.request
 * @param {Response} ctx.response
 * @param {Auth} ctx.auth
 */
async getNurseReport({ auth, request, response }) {
  try {
    const XLSX = require("xlsx");
    const moment = require("moment");

    const { idUser, dateStart, dateEnd } = request.get();
    const userId = idUser ? parseInt(idUser) : (auth.user ? auth.user.id : 0);

    if (!userId) {
      return response.status(404).json({ error: "ID de profissional não informado!" });
    }

    if (moment(dateStart).isAfter(moment(dateEnd))) {
      return response.status(400).json({ error: "Data inicial maior que a final!" });
    }

    const services = (await Service.query()
      .where("idUser", userId)
      .whereBetween("wp_delivery_date", [dateStart, dateEnd])
      .with("address", (a) => {
        a.select("id","idService","zipCode","state","city","district","address","number","complement");
      })
      .with("availability", (r) => {
        r.with("scheduling", (s) => {
          s.with("zipCodeTrack", (z) => {
            z.select("id", "name");
          });
          s.select();
        });
        r.select("id", "idService", "idAvailabilityScheduling");
      })
      .with("productService.product")
      .select("service.id","registrationNumber","wp_customer_name","wp_delivery_date","wp_delivery_time","status","wp_customer_phone")
      .orderBy("wp_delivery_date", "ASC")
      .orderBy("wp_delivery_time", "ASC")
      .fetch()).toJSON();

    const prepareXLSX = services.map((item) => ({
      "ID do Pedido": `Portal #${item.id}`,
      "N° de Inscrição": item.registrationNumber || "",
      "Status": item.status,
      "Data": moment(item.wp_delivery_date).format("DD/MM/YYYY"),
      "Horário": item.wp_delivery_time,
      "Nome Completo": item.wp_customer_name,
      "Disponibilidade": item.availability?.scheduling?.zipCodeTrack?.name || "",
      "Bairro": item.address?.district || "",
      "Cidade / Estado": item.address ? `${item.address.city} (${item.address.state})` : "",
      "Telefone": item.wp_customer_phone || "",
      "Produto": item.productService?.map(p => `(${p.quantity}) - ${p.product?.name}`).join(" | ") || ""
    }));

    const worksheet = XLSX.utils.json_to_sheet(prepareXLSX);
    const wb = XLSX.utils.book_new();
    const fileName = `NurseReport_${moment().format("DD-MM-YYYY_HHmmss")}.xlsx`;

    XLSX.utils.book_append_sheet(wb, worksheet, "Relatório de Enfermagem");
    const buf = XLSX.write(wb, { type: "buffer", bookType: "xlsx" });

    response.header("Content-type", "application/vnd.ms-excel");
    response.header("Content-Length", buf.length);
    response.header("Content-disposition", `attachment; filename=${fileName}`);
    response.status(200).send(buf);

  } catch (error) {
    response.status(500).json({ error: error.message });
  }
}
