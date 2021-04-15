import React from 'react';
import { useForm } from 'react-hook-form';
import Modal from 'react-modal';





const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
};
Modal.setAppElement('#root');
const AppointmentForm = ({ modalIsOpen, closeModal, appointmentOn ,date }) => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data)
    closeModal();
    };

    console.log(watch("example")); // watch input value by passing the name of it

    return (
        <div>

            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >

                <h2 className="text-center text-brand" >{appointmentOn}</h2>
   <p className="text-secondary text-center"><small >On {date.toDateString()}</small></p>


                <form className ="p-3" onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group " >
                        <input style={{width:'600px' , padding:'7px' }} type="text" {...register("name", { required: true })} name="name" placeholder="Enter your name" />
                        {errors.name && <span className="text-danger" >This field is required</span>}
                    </div>
                    <div className="form-group">
                        <input style={{width:'600px', padding:'7px'}} type="text" {...register("phone", { required: true })} name="phone" placeholder="Enter your phone number" />
                        {errors.phone && <span className="text-danger" >This field is required</span>}
                    </div>
                    <div className="form-group">
                        <input style={{width:'600px', padding:'7px'}} type="text" {...register("email", { required: true })} name="email" placeholder="Enter your email" />
                        {errors.email && <span className="text-danger" >This field is required</span>}
                    </div>
                    <div className="form-group  row">
                        <div className="col-4 " >
                            <select style={{ padding:'7px'}} className="form-control " name="gender" {...register('gender', { required: true })}>
                                <option disabled={true} value="Not set"> select gender</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Not set">Other</option>
                            </select>
                            {errors.gender && <span className="text-danger" >This field is required</span>}
                        </div> <br/>
                        <div className="col-4">
                            <input style={{ padding:'7px'}} {...register("age", { required: true })} name="age" placeholder="Enter Your Age" />
                            {errors.age && <span className="text-danger" >This field is required</span>}
                        </div><br/>
                        <div className="col-4">
                            <input style={{ padding:'7px'}} {...register("weight", { required: true })} name="weight" placeholder="Enter Your Weight" />
                            {errors.weight && <span className="text-danger" >This field is required</span>}
                        </div>

                    </div>

  <div className ="form-group  text-right" >
 <button type="submit" className="btn btn-brand">Submit</button>
  </div>
                   
                </form>


            </Modal>
        </div>
    );
};

export default AppointmentForm;