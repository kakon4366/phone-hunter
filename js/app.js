//load phones
const loadPhones = () => {
    const searchText = document.getElementById('search-field').value;
    console.log(searchText);
    fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`)
        .then(res => res.json())
        .then(data => displayPhones(data.data))
}

//display phones
const displayPhones = phones => {
    const phoneContainer = document.getElementById('phone-container');
    phones.forEach(phone => {
        console.log(phone);
        const div = document.createElement('div');
        div.classList.add('col', 'col-md-6', 'col-lg-4');
        div.innerHTML = `
            <div class="card">
                <div class="p-4">
                    <img width="100%" src="${phone.image}" class="card-img-top" alt="" />
                </div>
                <div class="card-body">
                    <h5 class="card-title">${phone.phone_name}</h5>
                    <p class="card-text">
                      <span class="fw-bold">Brand:</span> ${phone.brand}
                    </p>
                    <button class="btn btn-primary">Show Details</button>
                </div>
            </div>
        `;
        phoneContainer.appendChild(div);
    })
}

