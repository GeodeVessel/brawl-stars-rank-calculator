var rankSpace;
var trophyQuota;

function setup() {
  createCanvas(800, 450);
  createElement("h4", "Esse software te diz quantos troféus são necessários para atingir um certo marco. Apenas digite o marco que deseja alcançar, e o BSRC te mostrará quantos troféus serão necessários para chegar até lá. Isso não só te ajuda a determinar até quando você pretende puxar troféu com um brawler, mas também te ajuda a organizar os marcos de seus brawlers por causa da nova atualização!");
  createSpan("Seu marco: ");
  rankSpace = createInput();
  
}

//174, 198, 207
function draw() {
  background('white');
  var rank = rankSpace.value();
  calculateTQ(rank);
  defaultResponse();
  textAlign(CENTER, CENTER);
  textSize(38);
  textFont('Comic Sans MS');
  fill(color(18, 53, 36));
  text(trophyQuota, width/2, height/2);
  
}

function calculateTQ (rank) {
  trophyQuota = 20 * (rank - 1);
  
}

function defaultResponse() {
  if (trophyQuota < 0) {
    trophyQuota = "digite o marco desejado...";
  }
}
