
document.addEventListener('click', (e) => {
    if(e.target.classList.contains('delete')) {

        const id = e.target.parentElement.querySelector('.id').innerHTML
        
        axios.post('/delete-me', {id: id}).then(function() {
            e.target.parentElement.remove()
        }).catch(err => console.log(err))
    }


    if(e.target.classList.contains('adjust')) {

        const id = e.target.parentElement.querySelector('.id').innerHTML

        const userName = prompt('Enter your name adjustment')
        const userSport = prompt('Enter your sport adjustment')
        console.log(userName)
        console.log(userSport)

        axios.post('/update-item', {id: id, name: userName, sport: userSport})
        .then(function() {
            //do something interesting here.
        })
        .catch('Please try again later')

    }
})