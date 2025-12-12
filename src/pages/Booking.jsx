import React, {useState} from 'react'
import { SERVICES } from '../data/siteData'
import { submitBooking } from '../api/bookService'

export default function Booking() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    service: 'servicing',
    date: '',
    time: '',
    message: ''
  })

  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(null)

  const handle = (e) =>
    setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const onSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      const res = await submitBooking(form)
      setSuccess(res)
      alert('Booking submitted! (frontend placeholder)')
    } catch (err) {
      console.error(err)
      alert('Failed to submit booking')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="bg-[#4A4F55] text-[#F2E8C9] min-h-screen py-16">
      <div className="container">

        <h1 className="text-3xl font-semibold mb-8 text-[#D4AF37]">
          Book a Service
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* FORM */}
          <form
            onSubmit={onSubmit}
            className="p-6 bg-[#5A6066] border border-[#737A82] rounded-lg shadow-md flex flex-col gap-4"
          >
            <input
              name="name"
              value={form.name}
              onChange={handle}
              placeholder="Full Name"
              required
              className="p-3 rounded bg-[#4A4F55] border border-[#737A82] text-[#F2E8C9]"
            />

            <input
              name="phone"
              value={form.phone}
              onChange={handle}
              placeholder="Phone Number"
              required
              className="p-3 rounded bg-[#4A4F55] border border-[#737A82] text-[#F2E8C9]"
            />

            <input
              name="email"
              value={form.email}
              onChange={handle}
              placeholder="Email"
              className="p-3 rounded bg-[#4A4F55] border border-[#737A82] text-[#F2E8C9]"
            />

            <input
              name="address"
              value={form.address}
              onChange={handle}
              placeholder="Full Address"
              className="p-3 rounded bg-[#4A4F55] border border-[#737A82] text-[#F2E8C9]"
            />

            <select
              name="service"
              value={form.service}
              onChange={handle}
              className="p-3 rounded bg-[#4A4F55] border border-[#737A82] text-[#F2E8C9]"
            >
              {SERVICES.map((s) => (
                <option key={s.id} value={s.id}>
                  {s.title}
                </option>
              ))}
            </select>

            <div className="grid grid-cols-2 gap-3">
              <input
                name="date"
                value={form.date}
                onChange={handle}
                type="date"
                className="p-3 rounded bg-[#4A4F55] border border-[#737A82] text-[#F2E8C9]"
              />

              <input
                name="time"
                value={form.time}
                onChange={handle}
                type="time"
                className="p-3 rounded bg-[#4A4F55] border border-[#737A82] text-[#F2E8C9]"
              />
            </div>

            <textarea
              name="message"
              value={form.message}
              onChange={handle}
              placeholder="Any notes..."
              rows={3}
              className="p-3 rounded bg-[#4A4F55] border border-[#737A82] text-[#F2E8C9]"
            ></textarea>

            <button
              disabled={loading}
              type="submit"
              className="px-6 py-3 bg-[#D4AF37] text-black font-semibold rounded-lg hover:bg-[#E3C15A] transition w-max"
            >
              {loading ? 'Submitting...' : 'Submit Booking'}
            </button>
          </form>

          {/* CONTACT / HELP CARD */}
          <div className="p-6 bg-[#5A6066] rounded-lg shadow-md border border-[#737A82]">
            <h3 className="text-xl font-semibold mb-4 text-[#D4AF37]">
              Need Help?
            </h3>

            <div className="text-sm mb-3">📞 Call: +91-8523056414</div>
            <div className="text-sm mb-3">💬 WhatsApp: +91-8523056414</div>
            <div className="text-sm mb-3">📧 Email: coolclimateairconditioning2025@gmail.com</div>

            <p className="text-sm opacity-90">
              We will contact you to confirm your booking and assign a technician.
            </p>
          </div>
        </div>

        {success && (
          <div className="mt-6 p-4 bg-[#3A4A3A] border border-green-400 rounded text-green-200">
            Booking created: {JSON.stringify(success)}
          </div>
        )}
      </div>
    </div>
  )
}
