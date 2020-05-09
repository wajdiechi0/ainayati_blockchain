/**
 * Create a new appointment
 * @param {org.acme.ainayati.ArrangeAppointment} appointment
 * @transaction
 */
async function createNewAppointment(appointment) {
    let assetRegistry = await getAssetRegistry('org.acme.ainayati.AppointmentAsset');
    var factory = getFactory()

    num_id = (Math.floor(Math.random() * ( 999999 - 100000) + 100000)).toString(10)

    var appointmentID = appointment.doctor.id + num_id;
    var newApointment = factory.newResource('org.acme.ainayati', 'AppointmentAsset', appointmentID)
    newApointment.doctor = appointment.doctor;
    newApointment.patient = appointment.patient;
    newApointment.date = appointment.date;
    newApointment.description = appointment.description;
    await assetRegistry.add(newApointment)
}