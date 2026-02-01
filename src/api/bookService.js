// Use Vite environment variable
const baseUrl = import.meta.env.VITE_API_URL || ''

export async function submitBooking(data) {
  console.log('Submitting booking (frontend placeholder):', data)

 
  return new Promise((res) =>
    setTimeout(() => res({ ok: true, id: 'fake_booking_123' }), 800)
  )
}
