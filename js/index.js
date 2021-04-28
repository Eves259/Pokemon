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

    document.getElementById('AB-1').innerHTML = mander.abilities[0].name;
    document.getElementById('Ab-2').innerHTML = mander.abilities[1].name;

    document.getElementById('BE').innerHTML = mander.base_experience;
    document.getElementById('height').innerHTML = mander.height;
    document.getElementById('ID').innerHTML = mander.id;
    document.getElementById('default').innerHTML = mander.is_default;
    document.getElementById('name').innerHTML = mander.name;
    document.getElementById('order').innerHTML = mander.order;

    document.getElementById('stat-1').innerHTML = mander.stats[0].base_stat;
    document.getElementById('stat-2').innerHTML = mander.stats[1].base_stat;
    document.getElementById('stat-3').innerHTML = mander.stats[2].base_stat;
    document.getElementById('stat-4').innerHTML = mander.stats[3].base_stat;
    document.getElementById('stat-5').innerHTML = mander.stats[4].base_stat;
    document.getElementById('stat-6').innerHTML = mander.stats[5].base_stat;

    document.getElementById('type-slot').innerHTML = mander.types.slot;
    document.getElementById('type-name').innerHTML = mander.types.type.name;

    document.getElementById('weight').innerHTML = mander.weight;
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

    document.getElementById('AB-1').innerHTML = meleon.abilities[0].name;
    document.getElementById('Ab-2').innerHTML = meleon.abilities[1].name;

    document.getElementById('BE').innerHTML = meleon.base_experience;
    document.getElementById('height').innerHTML = meleon.height;
    document.getElementById('ID').innerHTML = meleon.id;
    document.getElementById('default').innerHTML = meleon.is_default;
    document.getElementById('name').innerHTML = meleon.name;
    document.getElementById('order').innerHTML = meleon.order;

    document.getElementById('stat-1').innerHTML = meleon.stats[0].base_stat;
    document.getElementById('stat-2').innerHTML = meleon.stats[1].base_stat;
    document.getElementById('stat-3').innerHTML = meleon.stats[2].base_stat;
    document.getElementById('stat-4').innerHTML = meleon.stats[3].base_stat;
    document.getElementById('stat-5').innerHTML = meleon.stats[4].base_stat;
    document.getElementById('stat-6').innerHTML = meleon.stats[5].base_stat;

    document.getElementById('type-slot').innerHTML = meleon.types.slot;
    document.getElementById('type-name').innerHTML = meleon.types.type.name;

    document.getElementById('weight').innerHTML = meleon.weight;
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

    document.getElementById('AB-1').innerHTML = zard.abilities[0].name;
    document.getElementById('Ab-2').innerHTML = zard.abilities[1].name;

    document.getElementById('BE').innerHTML = zard.base_experience;
    document.getElementById('height').innerHTML = zard.height;
    document.getElementById('ID').innerHTML = zard.id;
    document.getElementById('default').innerHTML = zard.is_default;
    document.getElementById('name').innerHTML = zard.name;
    document.getElementById('order').innerHTML = zard.order;

    document.getElementById('stat-1').innerHTML = zard.stats[0].base_stat;
    document.getElementById('stat-2').innerHTML = zard.stats[1].base_stat;
    document.getElementById('stat-3').innerHTML = zard.stats[2].base_stat;
    document.getElementById('stat-4').innerHTML = zard.stats[3].base_stat;
    document.getElementById('stat-5').innerHTML = zard.stats[4].base_stat;
    document.getElementById('stat-6').innerHTML = zard.stats[5].base_stat;

    document.getElementById('type-slot').innerHTML = zard.types.slot;
    document.getElementById('type-name').innerHTML = zard.types.type.name;

    document.getElementById('weight').innerHTML = zard.weight;
}