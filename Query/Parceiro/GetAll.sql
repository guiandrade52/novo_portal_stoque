SELECT TOP 100
	PAR.CODPARC AS CodParc,
	PAR.NOMEPARC AS Nome
FROM TGFPAR PAR
WHERE PAR.CODPARC <> 0 
AND PAR.NOMEPARC IS NOT NULL
AND PAR.CODPARC IN (1)
--AND UPPER(PAR.NOMEPARC) LIKE '%{0}%'