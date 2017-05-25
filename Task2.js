class Fighter {

    constructor(name, power=10, health=1000) {
        this.name = name;
        this.power = power;
        this.health = health;
    }

    setDamage(damage) {
        this.health = this.health - damage;
        console.log(`${this.name}'s health: ${this.health}`);
    }

    hit(enemy, point) {
        let damage = point * this.power;
        console.log(`${this.name} attacked ${enemy.name} and deals ${damage} damage`);
        enemy.setDamage(damage);
    }

}

class ImprovedFighter extends Fighter {
    doubleHit(enemy, point) {
        super.hit(enemy, point*2);
    }
}

function fight(fighter, improvedFighter, ...points) {
    points.every(point => {
    
        fighter.hit(improvedFighter, point);

        if (improvedFighter.health > 0) {

            if (Math.random() > 0.7) {
                improvedFighter.doubleHit(fighter, point);
            } else {
                improvedFighter.hit(fighter, point);
            }

            if (fighter.health <= 0) {
                console.log(`${fighter.name} died. ${improvedFighter.name} won!`);
                return false;
            }

        } else {
            console.log(`${improvedFighter.name} died. ${fighter.name} won!`);
            return false;
        }

        return true;

    });
}

let fighter = new Fighter("fighter1");
let improvedFighter = new ImprovedFighter("fighter2");

fight(fighter, improvedFighter, 15, 20, 46, 32, 12);