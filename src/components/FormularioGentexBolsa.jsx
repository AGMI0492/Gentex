import React, { useEffect, useRef } from 'react'
import ListGroupGentex from './ListGroupGentex';
import NavBarGentex from './NavBarGentex';
import TableGentex from './TableGentex';

const FormularioGentexBolsa = () => {

    useEffect(() => {
        inputRefWo.current.focus();


    }, [])

    const inputRef = useRef();
    const inputRefWo = useRef();


    const handleBlur = () => {

        let foco = inputRef.current.focus();
        console.log(foco)
    };


    return (
        <>
            <NavBarGentex />


            <form >

                <div className="container-fluid mt-3" >
                    <div className="row">
                        <div className="col">
                            <ListGroupGentex />
                        </div>
                        <div className="col mt-5" tabIndex={-1}>
                            <input ref={inputRefWo} placeholder="WO: " type='text' className='form-control mb-2' />
                            <input
                                ref={inputRef} placeholder="Serial: " type='text' className='form-control' onBlur={handleBlur} />
                            <button className='btn btn-primary-outline' ></button>
                        </div>
                        <div className="col">
                            <TableGentex />
                        </div>
                    </div>
                </div>


            </form>


        </>
    )
}

export default FormularioGentexBolsa;