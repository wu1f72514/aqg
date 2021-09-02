const storage = {
    get(key){
        return localStorage.getItem(key)
    },
    set(key, value){
        return localStorage.setItem(key, value)
    },
    del(key){
        return localStorage.removeItem(key)
    },
    clear(){
        return localStorage.clear()
    },
}

const dom = {
    set(id, val){
        document.getElementById(id).innerText = val
    },
    get(id){
        return document.getElementById(id).innerText
    },
    hide(id){
        document.getElementById(id).style.visibility = 'none'
    },
    show(id){
        document.getElementById(id).style.visibility = 'default'
    },
}

const binded = {}

const binder = {
    bind(node_id, key){
        binded[key] = node_id
    },
}

const notifs = {
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
        let notifs = storage.get('notifs')
        if(notifs === null){
            notifs = []
            storage.set('notifs', notifs)
        }
      return notifs
    },
}


const dashboard = {
    alive(){
        let nb = notifs.get().length
        dom.set('notif_counter', nb)
        if(nb === 0){
            dom.hide('notif_counter')
        }
        else{
            dom.show('notif_counter')
        }
    },
}

