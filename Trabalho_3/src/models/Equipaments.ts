export class Equipaments {
    name: string;
    functionFromEquipament: string;
    validate: Date;

    constructor(name: string, functionFromEquipament: string, validate: Date) {
        this.name = name;
        this.functionFromEquipament = functionFromEquipament;
        this.validate = validate;
    }

}