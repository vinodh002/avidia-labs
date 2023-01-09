function fetchAndRenderRandomUser(){
    let URL = 'https://randomuser.me/api/';
    fetch(URL)
    .then(response => response.json())
    .then(data => renderUserData(data))
    .catch(error => alert(error));
    }
    
    function renderUserData(data){
    let user = data.results[0];
    let cardElem = document.querySelector('.card');
    cardElem.innerHTML = `
    <div class = "card-head">
    <div class = "user-image">
    <img src = "${user.picture.large}" alt = "">
    </div>
    </div>
    <div class = "card-body">
        <div class = "user-post-address">
            <div>
                <span>${user.location.street.number}</span><span>Street Address</span>
            </div>
            <div>
                <span>${user.location.postcode}</span><span>Postcode</span>
            </div>
            <div>
                <span>${user.location.street.name}</span><span>Street Name</span>
            </div>
        </div>
    
        <div class = "user-name">
            <span class = "user-name-title">${user.name.title}.</span>
            <span class = "user-name-full">${user.name.first} ${user.name.last},</span>
            <span class = "user-age">${user.dob.age}</span>
        </div>
    
        <div class = "user-location-address">
            <span>${user.location.city}, ${user.location.state}, ${user.location.country}</span>
        </div>
    </div>
    
    <div class = "card-foot">
        <div class = "user-contact-info">
            <span>
                <i class = "fas fa-phone"></i> ${user.phone}
            </span>
            <span>
                <i class = "fa-solid fa-mobile-button"></i> ${user.cell}
            </span>
        </div>
    </div>
    `;
    }
    
    document.getElementById('generate-btn').addEventListener('click', fetchAndRenderRandomUser);
    
    fetchAndRenderRandomUser();
    
    
    
    
    