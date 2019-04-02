# InfluxDB

InfluxDB est une Time Series Database (TSDB) écrite en Go dont les principaux avantages sont les performances, 
la durée de rétention importante et la scalabilité

<details>
  <summary>Informations</summary>
  <ul>
      <li>C’est une base de données intégrant le temps (des timestamp) pour chacun de ses enregistrements. On appelle ce type de base de données des Time Series Databases.</li>
      <li>La base est Open Source.</li>
      <li>Serveur de base de données la plus performante du marché selon DB-Engines.com pour ce qui est des Time Series Databases.</li>
      <li>Possibilité d’archivage de données numériques ET alphanumériques (String).</li>
      <li>Langage de requêtes semblable au langage SQL qui est un standard que je connais.</li>
      <li>Possibilités de scripting en .Net, Java, JavaScript, Node.js, PHP, Python et j’en passe !</li>
      <li>Réplication des données possible sur plusieurs bases. Exemple : synchroniser la base de données locale avec une base de données dans le Cloud.</li>
      <li>Choix de la pérennité des données. On peut choisir les données que l’on veut garder et combien de temps. C’est un des points forts de InfluxDB, car cela permet de faire bien plus qu’il n’y paraît !</li>
      <li>Librairie Node-RED existante.</li>
      <li>Compatible Raspberry Pi et Raspbian.</li>
  </ul>
</details>

- Installation : [https://docs.influxdata.com/influxdb](https://docs.influxdata.com/influxdb)

```bash 
INFLUXDB_CONFIG_PATH=/etc/influxdb/influxdb.conf

echo $INFLUXDB_CONFIG_PATH                      
# /etc/influxdb/influxdb.conf
```

- Start Prompt : `influx -precision rfc3339`

**Useful links**

- https://blog.blaisot.org/raspi-timeseries-tick-stack.html
- Tuto : [https://bentek.fr/influxdb-grafana-raspberry-pi/](https://bentek.fr/influxdb-grafana-raspberry-pi/)
