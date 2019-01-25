SELECT 
    DISTINCT 
    PRO.CODGRUPOPROD
    ,GRU.DESCRGRUPOPROD										
FROM TGFPRO PRO 
INNER JOIN TGFGRU GRU  WITH(NOLOCK) ON GRU.CODGRUPOPROD = PRO.CODGRUPOPROD
WHERE PRO.CODPROD IN (
                        SELECT CODPROD 
                            FROM BH_FTLEQP EQP 
						WHERE EQP.NUMCONTRATO = 96
                        )