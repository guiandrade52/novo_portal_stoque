SELECT IDUSUPRTL AS idUsuario,
	   NUMCONTRATO AS Contrato,
       CODPARCAT AS CodParc,
	   NOMEPARC AS Nome
	   FROM AD_USUPRTLCON PRLCON
	   INNER JOIN TGFPAR PAR ON PRLCON.CODPARCAT = PAR.CODPARC
	   WHERE IDUSUPRTL = 1177

