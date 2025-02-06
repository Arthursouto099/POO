import * as rl from 'readline-sync'
import { Patient } from './models/Patient'
import { Address } from './models/Address'
import { hospital } from './Hospital'
import { Nurse } from './models/Nurse';
import { Doctor } from './models/Doctor';



interface IPatientReady {
    patient: Patient
    nurse: Nurse
    doctor: Doctor
}


//const patient1 = new Patient("Leornado", "123-456-789-10", new Address("Rua Guimarões", 15, 9405700), 5199497551, "mild", 'Sinto uma dor de cabeça persistente');

export class GraphicalInterface {

    static readyToServe = new Map<number, IPatientReady>()
    static waitingList: Patient[] = []


    static displayOptions(): void {
        console.log(`
    <<System for Hospithal>>  

    1. -> Register patient
    2. -> Waiting list
    3. -> Init triage
    4. -> View patient historic
    5. -> exit

    `)
    }

    static initDisplayOption() {
        this.displayOptions()
        const option = rl.questionInt("Enter the option: ")
        this.initProgram(option)

    }

    static addPatientInWaitingList(patient: Patient): void {
        this.waitingList.push(patient)
    }

    static addPatientInReadyToServe(key: number, patient: IPatientReady): void {
        this.readyToServe.set(key, patient)
    }

    static initProgram(option: number): void {

        let condition = true

        while (condition) {
            switch (Number(option)) {
                case 1:
                    console.clear()
                    console.log("------> Register Page <-------")
                    const address = new Address(rl.question("Digite sua rua: "), rl.questionInt('Digite o numero: '), rl.questionInt("Digite o cep: "))

                    const degree = rl.question("Digite o  grau da sua dor: serious | moderate | mild: ")
                    let setDegree: 'serious' | 'moderate' | 'mild' = 'mild'

                    switch (degree) {
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

                    const newPatient = new Patient(rl.question("Digite seu nome: "), rl.question("Digite seu cpf: "), address, rl.questionInt("Digite seu numero: "), setDegree, rl.question('Diga o que esta sentindo: '))
                    this.addPatientInWaitingList(newPatient)
                    console.log("Patient was added to the not triage list> ")
                    rl.question("Digite qualquer tecla: ")
                    console.clear()
                    this.initDisplayOption()
                    break

                case 2:
                    console.clear()
                    console.log("---> Waiting list <---")
                    console.log("\n")
                    if (this.waitingList.length > 0) {
                        this.waitingList.forEach((patient) => {
                            console.log(`NAME: ${patient.name}, "CPF: ${patient.cpf}, DEGREE: ${patient.degree}, DESCRIPTION: ${patient.description} `)
                            console.log("----------------------------------------------------------------------------------------------------------")
                        })
                    }
                    else {
                        console.log("Nenhum paciente na lista de espera\n")
                    }
                    rl.question("Digite qualquer tecla: ")
                    console.clear()
                    this.initDisplayOption()
                    break

                case 3:
                    console.clear()
                    console.log("--> Patients on the waiting list\n")
                    if (this.waitingList.length < 1) {
                        console.log("< Nenhum paciente na lista de espera >")
                        rl.question()
                        console.clear()
                        this.initDisplayOption()
                        break
                    }
                    this.waitingList.forEach(patient => {
                        console.log(`ID: ${this.waitingList.indexOf(patient)} / NAME: ${patient.name}`)
                    })
                    console.log("\n")
                    const patientByIndex = rl.questionInt('Digite o id do paciente: ')
                    console.clear()
                    console.log("--> Encaminhando para a triagem <--")
                    const infoForTreatment = hospital.triage(this.waitingList[patientByIndex])
                    this.addPatientInReadyToServe(patientByIndex, infoForTreatment)
                    console.clear()
                    const keyOfPatient = this.readyToServe.get(patientByIndex)

                    try {
                        console.log('<--Iniciando Tratamento-->\n')

                        if (keyOfPatient !== undefined) {
                            const { doctor, patient, nurse } = keyOfPatient
                            console.log(`< Paciente no atendimento: ${patient.name} >`)
                            console.log(`< Emfermeira prestando servico: ${nurse.name} >`)
                            console.log(`< Medico prestando o atendimento: ${doctor.name} >\n`)

                            const description = rl.question('Faca uma descricao do caso do paciente: \n')

                            let medicaments: string[] = []

                            while (true) {
                                const medicament = rl.question("Digite o nome do medicamento: \n")
                                medicaments.push(medicament)
                                const yesOrNo = rl.question("Voce deseja adicionar mais algum medicamento? S/N:  \n")
                                if (yesOrNo.toUpperCase() === 'N') {
                                    break
                                }
                            }

                            const tratment = hospital.initTreatement(doctor, description, nurse, patient, medicaments)
                            console.log(tratment)
                            console.log("-----------------------------------------")
                            console.log("Tratamento realizado com sucesso")

                        }

                        else {
                            throw new Error("Algo deu errado")
                        }
                    }

                    catch (e: unknown) {

                        if (e instanceof Error) {
                            console.log(e.message)
                        }

                    }





                    // hospital.initTreatement()
                    this.waitingList.splice(patientByIndex, 1)
                    rl.question()
                    console.clear()
                    this.initDisplayOption()
                    break

                case 4:
                    console.clear()
                    hospital.getHistoricPatientBySector()
                    rl.question("Digite Qualquer tecla: ")
                    console.clear()
                    this.initDisplayOption()
                    break
                
                case 5:
                    console.clear()
                    console.log("Desligando...")
                    console.log('Clique control c para desligar o programa: \n')
                    rl.question()
                break


            }



        }
    }




}

GraphicalInterface.initDisplayOption()