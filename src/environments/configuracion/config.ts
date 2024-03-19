import { OPORTUNIDADES } from "../../app/core/enum/oportunidades.enum";
import { ROLES } from "../../app/core/enum/roles.enum";

export const config = {
  roles:[
    ROLES.ADMIN,
    ROLES.USUARIO,
    ROLES.VENDEDOR,
  ],
  oportunidades: [
  OPORTUNIDADES.PERDIDA,
  OPORTUNIDADES.GANADA,
  OPORTUNIDADES.EN_PROCESO,
  OPORTUNIDADES.CERRADA
  ]
};