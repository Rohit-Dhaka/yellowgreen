export default function Appointment() {
  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Appointment request sent! We will confirm shortly.')
    e.target.reset()
  }
  const input = 'w-full border border-slate-300 rounded px-4 py-3 focus:outline-none focus:border-blue-500'

  return (
    <>
      <div className="bg-blue-900 text-white py-14 text-center">
        <h1 className="text-4xl font-extrabold">Get Appointment</h1>
      </div>
      <section className="py-16 bg-slate-50">
        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow space-y-4">
          <input required className={input} placeholder="Patient Name" />
          <input required className={input} placeholder="Phone Number" />
          <div className="grid sm:grid-cols-2 gap-4">
            <input required type="date" className={input} />
            <select className={input}>
              <option>Eye Checkup</option>
              <option>Cataract Surgery</option>
              <option>LASIK Consultation</option>
              <option>Retina Clinic (Alternate Thursday)</option>
              <option>Other</option>
            </select>
          </div>
          <textarea rows="4" className={input} placeholder="Message (optional)" />
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-3 rounded">Book Appointment</button>
        </form>
      </section>
    </>
  )
}