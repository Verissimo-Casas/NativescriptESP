#include <WiFi.h>

#define SSID "Familia Casas"
#define PASSWD "familiacasas15"

unsigned long int last_time = millis();

const uint16_t port = 3000;
const char *host = "172.28.208.1";//"192.168.10.100";

void setup()
{
  Serial.begin(115200);

  WiFi.begin(SSID, PASSWD);
  while (WiFi.status() != WL_CONNECTED)
  {
    delay(100);
  }

  Serial.print("IP: ");
  Serial.println(WiFi.localIP());
}

void loop()
{
  WiFiClient client;

  if (!client.connect(host, port))
  {
    Serial.println("Falha de conexao");
    delay(1000);
    return;
  }

  Serial.println("Conectado!");

  client.print("Hell low word");

  Serial.println("Desconectando...");
  client.stop();

  Serial.print("Aguardando 15 segundos para proximo envio:");
  while ((millis() - last_time) < 15000)
  {
    delay(100);
  }
  last_time = millis();
}
