
    // Buttons
    var quickAddBtn = document.getElementById('QuickAdd');
    var cancelBtn = document.getElementById('Cancel');
    // Form Fields
    var fullname = document.getElementById('fullname');
    var address = document.getElementById('address');
    var city = document.getElementById('city');

    // Divs etc.
    
    var ContactDetil = document.querySelector('.widowDataContact');


    // Storage Array
    var addressBook = [];
    var serchResArr;

    function show(state){       
            document.querySelector('.bgBlack').style.display = state;
            document.querySelector('.quickaddForm').style.display = state;         
    }

    function show2(state2) {
            document.querySelector('.bgBlack').style.display = state2;
            document.querySelector('.widowDataContact').style.display = state2;  
    }

    function show3(state3) {
            document.querySelector('.bgBlack').style.display = state3;
            document.querySelector('.widowDataSearch').style.display = state3;  
    }


    
    let xs = 0; //couners
    let xd = 0;

    let phoneAddBtn = document.getElementById('AddPhone');

    phoneAddBtn.addEventListener("click", function () {
        var addPhone = document.getElementById('additionalPhone');
        xs++;
        if (xs < 5) {
            let newdiv = document.createElement('div');
            newdiv.innerHTML = '<input type="text" class="formFields, phoneForms"> <br>';
            addPhone.appendChild(newdiv);
        }
        else {
            alert('2social4me');
        }

    });

    let addMailBtn = document.getElementById('AddMail');

    addMailBtn.addEventListener("click", function () {
        let addMail = document.getElementById('additionalMail');
        xd++;
        if (xd < 5) {
            let newdivMail = document.createElement('div');
            newdivMail.innerHTML = '<input type="text" class="formFields, emailForms1"><br>';
            addMail.appendChild(newdivMail);
        }
        else {
            alert('2social4me');
        }
    });

        function compareName(a, s) {
            if (a.fullname > s.fullname) {
            return 1;
            }
            if (a.fullname < s.fullname) {
             return -1;
            }
            // a должно быть равным b
            return 0;
            }

         function comparePhone(a, s) {
            if (a.phone > s.phone) {
            return 1;
            }
            if (a.phone < s.phone) {
             return -1;
            }
            // a должно быть равным b
            return 0;
            }



//****
    var sortBtn = document.getElementById('nameSort');
    sortBtn.addEventListener("click", function () {


        addressBook.sort(compareName);

// вывести
        localStorage['addbook'] = JSON.stringify(addressBook);
        showAddressBook();

    });

    var sortBtn = document.getElementById('phoneSort');
    sortBtn.addEventListener("click", function () {


        addressBook.sort(comparePhone);

// вывести
        localStorage['addbook'] = JSON.stringify(addressBook);
        showAddressBook();

    });


    function jsonStructure(idContact, fullname, phone, address, city, email) {
        this.idContact = idContact;
        this.fullname = fullname;
        this.phone = phone;
        this.address = address;
        this.city = city;
        this.email = email;  
    }

    function windowContact(n) {
        show2('block');
        if (localStorage['addbook'] === undefined) {
            localStorage['addbook'] = '';
        } 
        else {
            addressBook = JSON.parse(localStorage['addbook']);
            // Loop over the array addressBook and insert into the page
            ContactDetil.innerHTML = '';
            
        
            let sts =  '<div class="windowContactContent">';
                sts += '<div class="formTop">';
                sts += '<div class="windowName"><h1> <i class="fa fa-id-card-o" aria-hidden="true"></i> ' + addressBook[n].fullname + ' </h1></div>';
                sts += '<div class="iconForm"> <i class="fa fa-trash-o" onclick="remuveS(' + n + ')" aria-hidden="true"></i></div>';
                sts += '</div>';
                sts += '<div class="formBottom">';
                sts += '<div class="formSeredina">';
                sts += 'Данные контакта:';
                sts += '</div>';
                sts += '<div class="formRight">';
                sts += '<div class="windowPhone"><p>' + addressBook[n].phone + '</p> </div>';
                // sts += '<div class="windowPhone1"><p>' + addressBook[n].phone1 + '</p></div>';
                // sts += '<div class="windowPhone2"><p>' + addressBook[n].phone2 + '</p></div>';
                sts += '<div class="windowCity"><p>' + addressBook[n].city + '</p></div>';
                sts += '<div class="windowAddress"><p>' + addressBook[n].address + '</p></div>';
                sts += '<div class="windowEmail"><p>' + addressBook[n].email + '</p></div>';
                // sts += '<div class="windowEmail1"><p>' + addressBook[n].email1 + '</p></div>';
                // sts += '<div class="windowEmail2"><p>' + addressBook[n].email2 + '</p></div>';
                sts += '</div>';
                sts += '<div class="formLeft">';
                sts += '<div class="windowLeftPhone">Phone <i class="fa fa-phone" aria-hidden="true"></i></div>';
                sts += '<div>City <i class="fa fa-map-marker" aria-hidden="true"></i></i></div>';
                sts += '<div>Address <i class="fa fa-location-arrow" aria-hidden="true"></i></div>';
                sts += '<div class="windowLeftEmail">Email <i class="fa fa-envelope" aria-hidden="true"></i></div>';
                // sts += '';
                // sts += '';
                // sts += '';
                // sts += '';
                // sts += '';
                sts += '</div>';
                sts += '</div>';
                sts += '</div>';

                
                

                ContactDetil.innerHTML += sts;
        }


    }
    
    let idContact = 0;
    function generatorId() {
        if (addressBook.length == 0) {
            idContact = 1;
        }
        else {
            idContact = addressBook[addressBook.length - 1].idContact + 1;
        }
    }


    function remuveS(s) {
        addressBook.splice(s, 1);
        localStorage['addbook'] = JSON.stringify(addressBook);
        showAddressBook();
        show2('none');

    }


    let phoneForms = document.getElementsByClassName('phoneForms');
    let emailForms2 = document.getElementsByClassName('emailForms1');
    function addToBook() {
        
        let isNull = fullname.value != '' && phone.value != '';
        if (isNull) {
            let phone = [];
            for (i = 0; i < phoneForms.length; i++) {
                phone.push(phoneForms[i].value);
            }

            let email = [];
            for (j = 0; j < emailForms2.length; j++) {
                email.push(emailForms2[j].value);
            }

            let obj = new jsonStructure(idContact, fullname.value, phone, address.value, city.value, email);
            addressBook.push(obj);
            localStorage['addbook'] = JSON.stringify(addressBook);
            show('none')
            clearForm();

            showAddressBook();
        }
    }

    var addBookDiv = document.querySelector('.addbook');
    addBookDiv.addEventListener("click", removeEntry);

    function removeEntry(e) {
        // Remove an entry from the addressbook
        if (e.target.classList.contains('delbutton')) {
            let remID = e.target.getAttribute('data-id');
            addressBook.splice(remID, 1);
            localStorage['addbook'] = JSON.stringify(addressBook);
            showAddressBook();
        }
    }

    function clearForm() {
        let formFields = document.querySelectorAll('.formFields');
        for (let i in formFields) {
            formFields[i].value = '';  
        }
        let phoneForms1 = document.getElementsByClassName('phoneForms');
        for (let i in phoneForms1) {
            phoneForms1[i].value = '';  
        }
        let emailForms3 = document.getElementsByClassName('emailForms1');
        for (let i in emailForms3) {
            emailForms3[i].value = '';  
        }
    }

    function showAddressBook() {
        if (localStorage['addbook'] === undefined) {
            localStorage['addbook'] = '';
        } 
        else {
            addressBook = JSON.parse(localStorage['addbook']);
            // Loop over the array addressBook and insert into the page
            addBookDiv.innerHTML = '';
            
            for (let n in addressBook) {
                let str = '<div class="entry">';
                str += '<div onclick = "windowContact(' + n + ')" > <div class="phone"><p>' + addressBook[n].phone[0] + '</p></div>';
                str += '<div class="name"><p>' + addressBook[n].fullname + '</p></div>';
                str += '<div class="city"><p>' + addressBook[n].city + '</p></div>';
                str += '<div class="address"><p>' + addressBook[n].address + '</p></div>';
                str += '<div class="email"><p>' + addressBook[n].email[0] + '</p></div></div>';
                str += '<div class="del"><a href="#" class="delbutton" data-id="' + n + '">Delete</a></div>';
                str += '</div>';
                addBookDiv.innerHTML += str;
            }
        }
    }

    let searchStr = document.getElementById('search');
    let searchBtn =document.getElementById('searchBtn');
    searchBtn.addEventListener("click", searchFunc);
    function searchFunc() {

    let searchStrLowerC = searchStr.value.toLowerCase()

    if (searchStrLowerC === '') {
        alert('Error');
    }

    else if (searchStrLowerC === ' ') {
        alert('Error');
    }
    else {

    asdfasdf = localStorage['addbook'];
    qwqwerqwe = asdfasdf.toLowerCase()
    qwerq = JSON.parse(qwqwerqwe)


    serchResArr = qwerq.filter(function (item) {
       return (item.phone == searchStrLowerC || item.phone1 == searchStrLowerC || item.phone2 == searchStrLowerC || item.fullname == searchStrLowerC || item.city == searchStrLowerC || item.address == searchStrLowerC || item.email == searchStrLowerC || item.email1 == searchStrLowerC || item.email2 == searchStrLowerC);
     });
     // alert(JSON.stringify(serchResArr));

     show3('block');
     showSerchRes();
    }
}
    var addSearch = document.querySelector('.widowDataSearch');



    function showSerchRes() {

            addSearch.innerHTML = '';

        for (let n in serchResArr) {

        

        let stn =  '<div class="entry">';
            stn += '<div onclick = "windowContact(' + n + ')" > <div class="phone"><p>' + serchResArr[n].phone[0] + '</p></div>';
            stn += '<div class="name"><p>' + serchResArr[n].fullname + '</p></div>';
            stn += '<div class="city"><p>' + serchResArr[n].city + '</p></div>';
            stn += '<div class="address"><p>' + serchResArr[n].address + '</p></div>';
            stn += '<div class="email"><p>' + serchResArr[n].email[0] + '</p></div></div>';
            stn += '</div>';
            addSearch.innerHTML += stn;

        }
    }

showAddressBook();
