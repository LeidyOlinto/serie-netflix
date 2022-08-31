
import {getHellfireClubSubscriptions, subscribeToHellfireClube } from './firebase/hellfire-clube.js';

const txtName = document.getElementById('txtName');
const txtEmail = document.getElementById('txtEmail');
const txtLevel = document.getElementById('txtLevel');
const txtCharacter = document.getElementById('txtCharacter');

const btnSubscribe = document.getElementById('btnSubscribe');


console.log(txtName);
//preenchendo os atributos para o banco de dados.
btnSubscribe.addEventListener('click', async () => {
    const subscription = {
        name: txtName.value,
        email: txtEmail.value,
        level: txtLevel.value,
        chracter: txtCharacter.value
    }

    //salvar no banco de dados
    const subscriptionId = await subscribeToHellfireClube(subscription)

    txtName.value= ""
    txtEmail.value= ""
    txtLevel.value = ""
    txtCharacter.value = ""

    alert(`Inscrito com sucesso:${subscriptionId}`)
})

async function loadData(){
    const subscriptions =  await getHellfireClubSubscriptions()
    console.log(subscriptions)
}
loadData()