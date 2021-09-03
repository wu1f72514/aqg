let datas = {
    notifs: {
        datas: [],
        nb: 0,
    },
}

// binds
bind.byId('notif_counter', 'notifs.nb')

const notifs = {
    _init(){
        alert('uu')
    },
    update(nb){
        storage.set('notif_counter', nb)
        dom.set('notif_counter', nb)
    },
    add(txt){
        let notifs = storage.get('notifs')
        if(notifs === null){
            notifs = []
        }
        notifs.push(txt)
        storage.set('notifs', notifs)
    },
    get(){
        return bind.get('notifs')
    },
}


const dashboard = {
    alive(){
        // let nb = notifs.get().length
        // dom.set('notif_counter', nb)
        // if(nb === 0){
        //     dom.hide('notif_counter')
        // }
        // else{
        //     dom.show('notif_counter')
        // }

        // test

        // bind.byId('toto', 'notifs')
        // bind.byId('notif_counter', 'notifs.bidon')
        // console.dir(bind.list())
        // bind.set('id', 'notifs.nb', 145)

        const options = {
            backdropColor:"#000000",
            sequence:[
                {
                    element:"#app_title",
                    description:"<strong>AQg</strong> est une application qui vous aide à entretenir votre aquarium.<br /><br />Elle est gratuite<br />Les données sont stockées sur votre ordinateur en toute confidentialité",
                    placement:"bottom"
                },
                {
                    element:"#card_tanks",
                    description:"Le bloc <strong>Aquariums</strong> vous permet de gérer de 1 à 3 aquariums",
                    placement:"bottom"
                },
                {
                    element:"#card_tanks_row_buttons",
                    description:"Pour passer de la gestion d'un aquarium à l'autre, il suffit de cliquer sur son bouton",
                    placement:"bottom"
                },
                {
                    element:"#card_maintenances_title",
                    description:"Le bloc <strong>Entretiens</strong> vous permet de gérer l'entretien de l'aquarium sélectionné",
                    placement:"top"
                },
                {
                    element:"#card_maintenances_lk_new",
                    description:"Le bouton <img src=\"static/img/tour/maintenances_bt_new_fr.png\" alt=\"New\" /> vous permet d'ajouter un entretien réalisé",
                    placement:"top"
                },
                {
                    element:"#card_maintenances_lk_done",
                    description:"Le bouton <img src=\"static/img/tour/maintenances_bt_done_fr.png\" alt=\"Done\" /> vous permet de voir les entretiens déjà réalisés",
                    placement:"top"
                },
                {
                    element:"#card_maintenances_lk_plan",
                    description:"Le bouton <img src=\"static/img/tour/maintenances_bt_plan_fr.png\" alt=\"Plan\" /> vous permet gérer un plan d'entretien",
                    placement:"top"
                },
            ],
            onComplete:function() {
                // your code
            }
        };
        createSequence(options);
        document.getElementById("tooltip-helper-end-sequence").innerHTML = '<i class="material-icons">close</i> Quitter'
        document.getElementById("tooltip-helper-prev-sequence").innerHTML = '<i class="material-icons">arrow_back</i> Précédent'
        document.getElementById("tooltip-helper-next-sequence").innerHTML = 'Suivant <i class="material-icons">arrow_forward</i>'

    },
}

console.dir(notifs.get())


