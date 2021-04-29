function init1(){
    let charmander = {
        "abilities": [
        {
            "name": "blaze"
        },
        {
            "name": "solar-power"
        }
        ],
        "base_experience": 62,
        "height": 6,
        "id": 4,
        "is_default": true,
        "name": "charmander",
        "order": 5,
        "stats": [
        {
            "base_stat": 39,
            "effort": 0,
            "stat": {
            "name": "hp"
            }
        },
        {
            "base_stat": 52,
            "effort": 0,
            "stat": {
            "name": "attack"
            }
        },
        {
            "base_stat": 43,
            "effort": 0,
            "stat": {
            "name": "defense"
            }
        },
        {
            "base_stat": 60,
            "effort": 0,
            "stat": {
            "name": "special-attack"
            }
        },
        {
            "base_stat": 50,
            "effort": 0,
            "stat": {
            "name": "special-defense"
            }
        },
        {
            "base_stat": 65,
            "effort": 1,
            "stat": {
            "name": "speed"
            }
        }
        ],
        "types": [
        {
            "slot": 1,
            "type": {
            "name": "fire"
            }
        }
        ],
        "weight": 85
    }
    var char = JSON.stringify(charmander);
    var mander = JSON.parse(char);

    document.getElementById('AB-1').innerHTML = "Ability 1: " + mander.abilities[0].name;
    document.getElementById('AB-2').innerHTML = "Ability 2: " + mander.abilities[1].name;

    document.getElementById('BE').innerHTML = "Base experience: " + mander.base_experience;
    document.getElementById('height').innerHTML = "height: " + mander.height;
    document.getElementById('ID').innerHTML = "ID: " + mander.id;
    document.getElementById('default').innerHTML = "Default: " + mander.is_default;
    document.getElementById('name').innerHTML = "Name: " + mander.name;
    document.getElementById('order').innerHTML = "Order: " + mander.order;

    document.getElementById('stat-1').innerHTML = "HP: " + mander.stats[0].base_stat;
    document.getElementById('stat-2').innerHTML = "Attack: " + mander.stats[1].base_stat;
    document.getElementById('stat-3').innerHTML = "Defense: " + mander.stats[2].base_stat;
    document.getElementById('stat-4').innerHTML = "Special Attack: " + mander.stats[3].base_stat;
    document.getElementById('stat-5').innerHTML = "Special Defense: " + mander.stats[4].base_stat;
    document.getElementById('stat-6').innerHTML = "Speed: " + mander.stats[5].base_stat;

    document.getElementById('type-slot').innerHTML = "Type 1: " + mander.types.slot;
    document.getElementById('type-name').innerHTML = "Type 2: " + mander.types.type.name;

    document.getElementById('weight').innerHTML = "Weight: " + mander.weight;
}
    
function init2(){
    let charmeleon = {
        "abilities": [
        {
            "name": "blaze"
        },
        {
            "name": "solar-power"
        }
        ],
        "base_experience": 142,
        "height": 11,
        "id": 5,
        "is_default": true,
        "name": "charmeleon",
        "order": 6,
        "stats": [
        {
            "base_stat": 58,
            "effort": 0,
            "stat": {
            "name": "hp"
            }
        },
        {
            "base_stat": 64,
            "effort": 0,
            "stat": {
            "name": "attack"
            }
        },
        {
            "base_stat": 58,
            "effort": 0,
            "stat": {
            "name": "defense"
            }
        },
        {
            "base_stat": 80,
            "effort": 1,
            "stat": {
            "name": "special-attack"
            }
        },
        {
            "base_stat": 65,
            "effort": 0,
            "stat": {
            "name": "special-defense"
            }
        },
        {
            "base_stat": 80,
            "effort": 1,
            "stat": {
            "name": "speed"
            }
        }
        ],
        "types": [
        {
            "slot": 1,
            "type": {
            "name": "fire"
            }
        }
        ],
        "weight": 190
    }
    var charm = JSON.stringify(charmeleon);
    var meleon = JSON.parse(charm);

    document.getElementById('AB-1').innerHTML = "Ability 1: " + meleon.abilities[0].name;
    document.getElementById('AB-2').innerHTML = "Ability 2: " + meleon.abilities[1].name;

    document.getElementById('BE').innerHTML = "Base experience: " + meleon.base_experience;
    document.getElementById('height').innerHTML = "height: " + meleon.height;
    document.getElementById('ID').innerHTML = "ID: " + meleon.id;
    document.getElementById('default').innerHTML = "Default: " + meleon.is_default;
    document.getElementById('name').innerHTML = "Name: " + meleon.name;
    document.getElementById('order').innerHTML = "Order: " + meleon.order;

    document.getElementById('stat-1').innerHTML = "HP: " + meleon.stats[0].base_stat;
    document.getElementById('stat-2').innerHTML = "Attack: " + meleon.stats[1].base_stat;
    document.getElementById('stat-3').innerHTML = "Defense: " + meleon.stats[2].base_stat;
    document.getElementById('stat-4').innerHTML = "Special Attack: " + meleon.stats[3].base_stat;
    document.getElementById('stat-5').innerHTML = "Special Defense: " + meleon.stats[4].base_stat;
    document.getElementById('stat-6').innerHTML = "Speed: " + meleon.stats[5].base_stat;

    document.getElementById('type-slot').innerHTML = "Type 1: " + meleon.types.slot;
    document.getElementById('type-name').innerHTML = "Type 2: " + meleon.types.type.name;

    document.getElementById('weight').innerHTML = "Weight: " + meleon.weight;
}
function init3(){
    let charizard = {
        "abilities": [
        {
            "name": "blaze"
        },
        {
            "name": "solar-power"
        }
        ],
        "base_experience": 240,
        "height": 17,
        "id": 6,
        "is_default": true,
        "name": "charizard",
        "order": 7,
        "stats": [
        {
            "base_stat": 78,
            "effort": 0,
            "stat": {
            "name": "hp"
            }
        },
        {
            "base_stat": 84,
            "effort": 0,
            "stat": {
            "name": "attack"
            }
        },
        {
            "base_stat": 78,
            "effort": 0,
            "stat": {
            "name": "defense"
            }
        },
        {
            "base_stat": 109,
            "effort": 3,
            "stat": {
            "name": "special-attack"
            }
        },
        {
            "base_stat": 85,
            "effort": 0,
            "stat": {
            "name": "special-defense"
            }
        },
        {
            "base_stat": 100,
            "effort": 0,
            "stat": {
            "name": "speed"
            }
        }
        ],
        "types": [
        {
            "slot": 1,
            "type": {
            "name": "fire"
            }
        },
        {
            "slot": 2,
            "type": {
            "name": "flying"
            }
        }
        ],
        "weight": 905
    }
    var chari = JSON.stringify(charizard);
    var zard = JSON.parse(chari);

    document.getElementById('AB-1').innerHTML = "Ability 1: " + zard.abilities[0].name;
    document.getElementById('AB-2').innerHTML = "Ability 2: " + zard.abilities[1].name;

    document.getElementById('BE').innerHTML = "Base experience: " + zard.base_experience;
    document.getElementById('height').innerHTML = "height: " + zard.height;
    document.getElementById('ID').innerHTML = "ID: " + zard.id;
    document.getElementById('default').innerHTML = "Default: " + zard.is_default;
    document.getElementById('name').innerHTML = "Name: " + zard.name;
    document.getElementById('order').innerHTML = "Order: " + zard.order;

    document.getElementById('stat-1').innerHTML = "HP: " + zard.stats[0].base_stat;
    document.getElementById('stat-2').innerHTML = "Attack: " + zard.stats[1].base_stat;
    document.getElementById('stat-3').innerHTML = "Defense: " + zard.stats[2].base_stat;
    document.getElementById('stat-4').innerHTML = "Special Attack: " + zard.stats[3].base_stat;
    document.getElementById('stat-5').innerHTML = "Special Defense: " + zard.stats[4].base_stat;
    document.getElementById('stat-6').innerHTML = "Speed: " + zard.stats[5].base_stat;

    document.getElementById('type-slot').innerHTML = "Type 1: " + zard.types.slot;
    document.getElementById('type-name').innerHTML = "Type 2: " + zard.types.type.name;

    document.getElementById('weight').innerHTML = "Weight: " + zard.weight;
}