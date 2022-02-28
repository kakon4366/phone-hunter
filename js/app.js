//load phones
const loadPhones = () => {
    const searchText = document.getElementById('search-field').value;
    fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`)
        .then(res => res.json())
        .then(data => displayPhones(data.data))
}

//display phones
const displayPhones = phones => {
    const phoneContainer = document.getElementById('phone-container');
    phones.forEach(phone => {
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
                    <button onclick="loadSinglePhone('${phone.slug}')" class="btn btn-primary">Show Details</button>
                </div>
            </div>
        `;
        phoneContainer.appendChild(div);
    })
}

//load single phone 
const loadSinglePhone = phoneId => {
    const url = `https://openapi.programming-hero.com/api/phone/${phoneId}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayPhoneInfo(data.data))
}

//display phone info of card
const displayPhoneInfo = phone => {
    console.log(phone);
    const phoneInfoContainer = document.getElementById('phone-info-container');
    phoneInfoContainer.innerHTML = `
        <div class="card w-50 mx-auto w-responsive">
            <div class="p-4">
                <img src="${phone.image}" class="card-img-top" alt="..." />
            </div>
            <div class="card-body">
                <h5 class="card-title">Released Date:
                    <span class="fst-italic fw-normal">${phone.releaseDate ? phone.releaseDate : 'No Relesed Date Found!' }</span>
                </h5>
                <div class="mt-3">
                    <table style="width:100%">
                        <tr>
                            <th colspan="2">Main Feature's</th>
                        </tr>
                        <tr>
                            <td>Chip Set</td>
                            <td>${phone.mainFeatures.chipSet}</td>
                        </tr>
                        <tr>
                            <td>Display Size</td>
                            <td>${phone.mainFeatures.displaySize}</td>
                        </tr>
                        <tr>
                            <td>Memory</td>
                            <td>${phone.mainFeatures.memory}</td>
                        </tr>
                        <tr>
                            <td>Storage</td>
                            <td>${phone.mainFeatures.storage}</td>
                        </tr>
                        <tr>
                            <td>Sensors</td>
                            <td>${phone.mainFeatures.sensors}</td>
                        </tr>
                        <tr>
                            <th colspan="2">Other's</th>
                        </tr>
                        <tr>
                            <td>Bluetooth</td>
                            <td>${phone.others.Bluetooth}</td>
                        </tr>
                        <tr>
                            <td>GPS</td>
                            <td>${phone.others.GPS}</td>
                        </tr>
                        <tr>
                            <td>NFC</td>
                            <td>${phone.others.NFC}</td>
                        </tr>
                        <tr>
                            <td>Radio</td>
                            <td>${phone.others.Radio}</td>
                        </tr>
                        <tr>
                            <td>USB</td>
                            <td>${phone.others.USB}</td>
                        </tr>
                        <tr>
                            <td>WLAN</td>
                            <td>${phone.others.WLAN}</td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    `;
}