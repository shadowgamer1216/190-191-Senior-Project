const companyName = document.getElementById('companyName')
const shipping_form = document.getElementById('shipping_form')
const errorElement = document.getElementById('error')

shipping_form.addEventListener('add-company', (e) => {
    let messages = []
    if(companyName.value == '' || companyName.value == null){
        messages.push('Please Type a Company Name or NONE')
    }

    if(messages.length > 0){
        e.preventDefault()
        errorElement.innerText = messages.join(', ')
    }
})
