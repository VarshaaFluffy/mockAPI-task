import React, { useContext, useState } from 'react'
import { UserContext } from '../Context'
import s from './css/Users.module.css'

export default function Users() {
    const {userdata} = useContext(UserContext)
    const [users] = userdata
    const [modal, setModal] = useState({})
    const [btn, setBtn] = useState({ prev: true, next: true })

    const showMore = (e) => {
        setModal(e)
        setBtn({prev:true,next:true})
    }

    const showPrev = (e) => {
        let id = e.id - 1
        let data = users.filter((d) => d.id === id)
        if (data.length !== 0) {
            setModal(data[0])
            setBtn({ prev: true,next:true})
        }
        if(data.length===0) setBtn({...btn,prev:false})
    }

    const showNext = (e) => {
        let id = e.id + 1
        let data = users.filter((d) => d.id === id)
        if (data.length !== 0) {
            setModal(data[0])
            setBtn({next:true,prev:true})
        }
        if(data.length===0) setBtn({...btn,next:false})
    }

    return (
        <div className="container-fluid">
            <div className="row mt-3">
                <h4 className="text-primary text-center">Users List</h4>
                {
                    users ?
                        users.map((d, i) => (
                            <div className="col-auto m-auto" key={i}>
                                <div className="card border-success mb-3" style={{ maxWidth: "18rem" }} id={s.card}>
                                    <div className="card-header bg-transparent border-success">{d.name}</div>
                                    <div className="card-body text-primary">
                                        <p className="card-text">{`First Name : ${d.firstName}`}</p>
                                        <p className="card-text">{`Last Name : ${d.lastName}`}</p>
                                        <p className="card-text">{`Date of Birth : ${d.dob}`}</p>
                                        <p className="card-text">{`Age : ${d.age}`}</p>
                                    </div>
                                    <div className="card-footer bg-transparent border-success">
                                        <button className="btn btn-sm btn-primary"
                                            onClick={() => showMore(d)}
                                            data-bs-toggle="modal"
                                            data-bs-target="#more"
                                        >More</button>
                                    </div>
                                </div>
                            </div>
                        ))
                        :
                        <h4 className="text-center text-danger mt-5">Loading...</h4>
                }
            </div>

            <div>
                <div className="modal fade" id="more" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">{modal.name}</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <div>
                                    <p>{`First Name : ${modal.firstName}`}</p>
                                    <p>{`Last Name : ${modal.lastName}`}</p>
                                    <p>{`Date of Birth : ${modal.dob}`}</p>
                                    <p>{`Age : ${modal.age}`}</p>
                                    <p>{`Address 1 : ${modal.more ? modal.more.address_line1 : ""}`}</p>
                                    <p>{`Address 2 : ${modal.more ? modal.more.address_line2 : ""}`}</p>
                                    <p>{`Address 3 : ${modal.more ? modal.more.address_line3 : ""}`}</p>
                                </div>
                                <div>
                                    <button className={`btn btn-sm btn-warning m-3`} onClick={() => showPrev(modal)} disabled={!btn.prev}>Prev</button>
                                    <button className="btn btn-sm btn-danger" onClick={() => showNext(modal)} disabled={!btn.next}>Next</button>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
