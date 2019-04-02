-- Requetes pour afficher la derniere valeur pour une commande donnee

select name,val from full_history where name="appart_presence" order by date desc limit 1