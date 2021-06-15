import { createContext, useState, useEffect } from 'react'
import axios from 'axios'

export const UserContext = createContext();

export const UserProvider = (props) => {
    useEffect(() => {
        let logindata = localStorage.getItem("key")
        if (JSON.parse(logindata) == null) {
            let login = { user: "varshaa", pass: "varsgrootan", access: false }
            localStorage.setItem("key", JSON.stringify(login))
        }
    }, []);
    const [login, setLogin] = useState(() => {
        let a = localStorage.getItem("key")
        return JSON.parse(a)
    });

    const [user,setUser]=useState(()=>{
            axios.get('https://demo0492088.mockable.io/user-details')
            .then(res=>setUser(res.data))
            .catch(err=>console.log(err))
    });


    /*const [user, setUser] = useState([{
        "id": 1,
        "name": "Varshaa",
        "age": 21,
        "dob": "17-01-2000",
        "firstName": "Varshaa",
        "lastName": "M",
        "more": {
            "address_line1": "Tamil nadu",
            "address_line2": "Erode",
            "address_line3": "Chatram",
            "phone": "9150352457"
        }
    }, {
        "id": 2,
        "name": "Shiwangi",
        "age": 22,
        "dob": "25-12-1999",
        "firstName": "Shiwangi",
        "lastName": "P",
        "more": {
            "address_line1": "Tamil nadu",
            "address_line2": "Erode",
            "address_line3": "KrishnaNagar",
            "phone": "8556224103"

        }
    },
    {
        "id": 3,
        "name": "Varniha",
        "age": 21,
        "dob": "27-04-2000",
        "firstName": "Varniha",
        "lastName": "B",
        "more": {
            "address_line1": "Tamil nadu",
            "address_line2": "Thirupur",
            "address_line3": "Oldbusstand",
            "phone": "9876543210"
        }
    }, {
        "id": 4,
        "name": "Swetha",
        "age": 15,
        "dob": "20-10-2005",
        "firstName": "Swetha",
        "lastName": "M",
        "more": {
            "address_line1": "Tamil nadu",
            "address_line2": "Salem",
            "address_line3": "None",
            "phone": "8765432190"

        }
    },
    {
        "id": 5,
        "name": "Nivetha",
        "age": 17,
        "dob": "27-04-2003",
        "firstName": "Nivetha",
        "lastName": "L",
        "more": {
            "address_line1": "Tamil nadu",
            "address_line2": "Coimbatore",
            "address_line3": "RKNagar",
            "phone": "7896541203"
        }
    }, {
        "id": 6,
        "name": "Kabilan",
        "age": 18,
        "dob": "20-10-2002",
        "firstName": "Kabuilan",
        "lastName": "M",
        "more": {
            "address_line1": "Tamil nadu",
            "address_line2": "Coimbatore",
            "address_line3": "None",
            "phone": "9867545787"

        }
    },

    ])*/

    return (
        <UserContext.Provider value={{ userdata: [user, setUser], logindata: [login, setLogin] }}>
            {props.children}
        </UserContext.Provider>
    );
}