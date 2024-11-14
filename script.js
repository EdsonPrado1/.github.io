const champions = {
        "Aatrox": ["Aatrox.png"],
        "Ahri": ["Ahri.png"],
        "Akali": ["Akali.png"],
        "Alistar": ["Alistar.png"],
        "Amumu": ["Amumu.png"],
        "Anivia": ["Anivia.png"],
        "Annie": ["Annie.png"],
        "Aphelios": ["Aphelios.png"],
        "Ashe": ["Ashe.png"],
        "Azir": ["Azir.png"],
        "Bardo": ["Bardo.png"],
        "Blitzcrank": ["Blitzcrank.png"],
        "Brand": ["Brand.png"],
        "Braum": ["Braum.png"],
        "Caitlyn": ["Caitlyn.png"],
        "Camille": ["Camille.png"],
        "Cassiopeia": ["Cassiopeia.png"],
        "Cho'Gath": ["Cho'Gath.png"],
        "Corki": ["Corki.png"],
        "Darius": ["Darius.png"],
        "Diana": ["Diana.png"],
        "Dr. Mundo": ["Dr. Mundo.png"],
        "Draven": ["Draven.png"],
        "Ekko": ["Ekko.png"],
        "Elise": ["Elise.png"],
        "Evelynn": ["Evelynn.png"],
        "Ezreal": ["Ezreal.png"],
        "Fiddlesticks": ["Fiddlesticks.png"],
        "Fiora": ["Fiora.png"],
        "Fizz": ["Fizz.png"],
        "Galio": ["Galio.png"],
        "Gangplank": ["Gangplank.png"],
        "Garen": ["Garen.png"],
        "Gnar": ["Gnar.png"],
        "Gragas": ["Gragas.png"],
        "Graves": ["Graves.png"],
        "Hecarim": ["Hecarim.png"],
        "Heimer": ["Heimerdinger.png"],
        "Illaoi": ["Illaoi.png"],
        "Irelia": ["Irelia.png"],
        "Janna": ["Janna.png"],
        "Jarvan IV": ["Jarvan IV.png"],
        "Jhin": ["Jhin.png"],
        "Jinx": ["Jinx.png"],
        "Kai'Sa": ["Kai'Sa.png"],
        "Karthus": ["Karthus.png"],
        "Kassadin": ["Kassadin.png"],
        "Katarina": ["Katarina.png"],
        "Kayle": ["Kayle.png"],
        "Kennen": ["Kennen.png"],
        "Kha'Zix": ["Kha'Zix.png"],
        "Kindred": ["Kindred.png"],
        "Kled": ["Kled.png"],
        "Xin Zhao": ["Xin Zhao.png"],
        "Kog'Maw": ["Kog'Maw.png"],
        "LeBlanc": ["Leblanc.png"],
        "Lee Sin": ["Lee Sin.png"],
        "Leona": ["Leona.png"],
        "Lillia": ["Lillia.png"],
        "Milio": ["Milio.png"],
        "Ambessa": ["Ambessa.png"],
        "Smolder": ["Smolder.png"],
        "Naafiri": ["Naafiri.png"]
    
  
  };

    const runes = ["Eletrucutar", "Colheita Sombria", "Chuva de Lâminas", "Aperto dos Mortos-Vivos", "Invocar Aery", "Ímpeto Gradual", 
    "Agilidade nos Pés", "Ritmo Fatal", "Pós-choque", "Guardião", "Primeiro Ataque", "Cometa Arcano", "Livro de Feitiços Deslacrado", "Aprimoramento Glacial"];
    const spells = ["Flash", "Curar", "Ignite", "Exaustão", "Teleporte", "Smite", "Ghost", "Barreira", "Purificar"];
    const items = ["Abyssal Mask", "Archangel's Staff", "Ardent Censer", "Axiom Arc", "Banshee's Veil", "Black Cleaver", "Blackfire Torch", "Blade of the Ruined King", "Bloodsong", "Bloodthirster", "Bounty of Worlds", "Celestial Opposition", "Chempunk Chainsword", "Cosmic Drive", "Cryptbloom", "Dawncore", "Dead Man's Plate", 
 "Death's Dance", "Dream Maker", "Echoes of Helia", "Eclipse", "Edge of Night", "Essence Reaver", "Experimental Hexplate", "Fimbulwinter", "Force of Nature", "Frozen Heart", "Guardian Angel", "Guinsoo's Rageblade", "Heartsteel", "Hextech Rocketbelt", "Hollow Radiance", "Horizon Focus", "Hubris", "Hullbreaker", "Iceborn Gauntlet", 
"Immortal Shieldbow", "Imperial Mandate", "Infinity Edge", "Jak'Sho", "Kaenic Rookern", "Knight's Vow", "Kraken Slayer", "Liandry's Torment", "Lich Bane", "Locket of the Iron Solari", "Lord Dominik's Regard", "Luden's Companion", "Malignance", "Manamune", "Maw of Malmortius", "Mejai's Soulstealer", "Mercurial Scimitar", "Mikael's Blessing", 
"Moonstone Renewer", "Morellonomicon", "Mortal Reminder", "Muramana", "Nashor's Tooth", "Navori Flickerblade", "Opportunity", "Overlord's Bloodmail", "Phantom Dancer", "Profane Hydra", "Rabadon's Deathcap", "Randuin's Omen", "Rapid Firecannon", "Ravenous Hydra", "Redemption", "Riftmaker", "Rod of Ages", "Runaan's Hurricane", "Rylai's Crystal Scepter", "Seraph's Embrace", "Serpent's Fang", "Serylda's Grudge", "Shadowflame", "Shurelya's Battlesong", "Solstice Sleigh", "Spear of Shojin", "Spirit Visage", "Staff of Flowing Water", "Statikk Shiv", "Sterak's Gage", "Stormsurge", "Stridebreaker", "Sundered Sky", "Sunfire Aegis", "Terminus", "The Collector", "Thornmail", "Titanic Hydra", "Trailblazer", "Trinity Force", "Umbral Glaive", "Unending Despair", "Vigilant Wardstone", "Void Staff", "Voltaic Cyclosword", "Warmog's Armor", "Winter's Approach", "Wit's End", "Youmuu's Ghostblade", "Yun Tal Wildarrows", "Zaz'Zak's Realmspike", "Zeke's Convergence", "Zhonya's Hourglass", "Couraça de Pano", "Cristal de Rubi", "Manto Anula-Magia", "Pérola do Rejuvenescimento",  "Adaga",  "Tomo Amplificador", "Lágrima da Deusa", 
 "Espada Longa", "Lâmina de Doran", "Anel de Doran", "Botas de Velocidade", "Atlas Mundial"];

    const roles = ["Top", "Jungle", "Mid", "Adc", "Sup"]; // Posições fixas

    function getRandomElement(list) {
        return list[Math.floor(Math.random() * list.length)];
    }
    
    function sortComp() {
        const championNames = Object.keys(champions);
        const selectedChampions = [];
        const championDisplay = document.getElementById("championDisplay");
        championDisplay.innerHTML = ""; // Limpar o display antes de adicionar novos campeões
    
        // Selecionar 5 campeões aleatórios
        while (selectedChampions.length < 5) {
            const randomChampion = getRandomElement(championNames);
            if (!selectedChampions.includes(randomChampion)) {
                selectedChampions.push(randomChampion);
            }
        }
    
        // Exibir os campeões e suas informações com os papéis fixos
        selectedChampions.forEach((champion, index) => {
            const championDiv = document.createElement("div");
            championDiv.className = "champion";
            
            // Imagem do campeão
            const img = document.createElement("img");
            img.src = getRandomElement(champions[champion]);
            
            // Nome do campeão
            const name = document.createElement("h3");
            name.textContent = champion;
            
            // Papel do campeão
            const role = document.createElement("span");
            role.className = "role"; 
            role.textContent = `Papel: ${roles[index]}`; // Atribuir a posição correspondente
            
            // Detalhes (runa, feitiços, item)
            const detailsDiv = document.createElement("div");
            detailsDiv.className = "details";
            
            const runeDiv = document.createElement("span");
            runeDiv.textContent = `Runa: ${getRandomElement(runes)}`;
            
            const spellDiv = document.createElement("span");
            spellDiv.textContent = `Feitiços: ${getRandomElement(spells)} + ${getRandomElement(spells)}`;
            
            const itemDiv = document.createElement("span");
            itemDiv.textContent = `Primeiro item: ${getRandomElement(items)}`;
            
            detailsDiv.appendChild(role);
            detailsDiv.appendChild(runeDiv);
            detailsDiv.appendChild(spellDiv);
            detailsDiv.appendChild(itemDiv);
            
            championDiv.appendChild(img);
            championDiv.appendChild(name);
            championDiv.appendChild(detailsDiv);
            
            championDisplay.appendChild(championDiv);
        });
    }
    
    document.getElementById("sortButton").addEventListener("click", sortComp);
