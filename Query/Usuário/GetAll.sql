/* MODEL USUARIO PORTAL */

SELECT 
	PRL.IDUSUPRTL AS IdUsuario, 
	PRL.NOMEUSU AS Nome
FROM AD_USUPRTL PRL
INNER JOIN AD_USUPRTLCON PARCON WITH(NOLOCK) ON PARCON.IDUSUPRTL = PRL.IDUSUPRTL
WHERE PRL.NOMEUSU IS NOT NULL
AND PARCON.NUMCONTRATO IN (96)


