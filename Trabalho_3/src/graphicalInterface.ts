import * as rl from 'readline-sync'
import { Patient } from './models/Patient'
import { Address } from './models/Address'
import { hospital } from './Hospital'


//const patient1 = new Patient("Leornado", "123-456-789-10", new Address("Rua Guimarões", 15, 9405700), 5199497551, "mild", 'Sinto uma dor de cabeça persistente');

export class GraphicalInterface {
static currentPatientsList: Patient[] = []
static waitingList: Patient[] = []

static displayOptions(): void {
    console.log(`
    <<System for Hospithal>>  

    1. -> Register patient
    2. -> patients without treatment
    3. -> Init triage
    3. -> View patient historic

    `)
}

static initDisplayOption() {
    this.displayOptions()
    const option = rl.questionInt("Enter the option: ")
    this.initProgram(option)

}

static addPatientInWaitingList(patient: Patient) {
    this.waitingList.push(patient)
}

static initProgram(option: number): void {

    

    while(true) {
        switch(Number(option)) {
            case 1:
                console.clear()
                console.log("------> Register Page <-------")
                const address = new Address(rl.question("Digite sua rua: "), rl.questionInt('Digite o numero: '), rl.questionInt("Digite o ceep: "))

                const degree = rl.question("Digite o  grau da sua dor: serious | moderate | mild ")
                let setDegree: 'serious' | 'moderate' | 'mild' = 'mild'

                switch(degree) {
                    case 'mild':
                        setDegree = 'mild'
                        break
                    case 'moderate':
                        setDegree = 'moderate'
                        break
                    case 'serious': 
                        setDegree = 'serious'
                        break
                    default: 
                        setDegree = 'mild'
                        break
                }

                const newPatient = new Patient(rl.question("Digite seu nome: "), rl.question("Digite seu cpf: "), address, rl.questionInt("Digite seu numero: "), setDegree, rl.question('Diga o queb está sentindo: '))
                this.addPatientInWaitingList(newPatient)
                console.log("Patient was added to the not triage list> ")
                rl.question("Digite qualquer tecla: ")
                console.clear()
                this.initDisplayOption()
                break

            case 2:
                console.clear()
                console.log("---> Untreated patients <---")
                console.log(this.waitingList)
                rl.question("Digite qualquer tecla: ")
                console.clear()
                this.initDisplayOption()
            break

            case 3:
                console.clear()
                console.log("--> Patients on the waiting list\n")
                this.waitingList.forEach(patient => {
                console.log(`ID: ${this.waitingList.indexOf(patient)} NAME: ${patient.name}
                `)
                })
                const patientByIndex = rl.questionInt('Digite o index do paciente: ')
                console.clear()
                console.log("--> Encaminhando para a triagem <--")
                const patient = hospital.triage(this.waitingList[patientByIndex])
                this.waitingList.splice(patientByIndex, 1)
                rl.question()
            break


        }

    

    }
}




}

GraphicalInterface.initDisplayOption()