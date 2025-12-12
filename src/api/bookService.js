// Use Vite environment variable
const baseUrl = import.meta.env.VITE_API_URL || ''

export async function submitBooking(data) {
  console.log('Submitting booking (frontend placeholder):', data)

  // Example of real request:
  // return fetch(`${baseUrl}/api/book`, {
  //   method: 'POST',
  //   headers: { 'Content-Type': 'application/json' },
  //   body: JSON.stringify(data),
  // })

  return new Promise((res) =>
    setTimeout(() => res({ ok: true, id: 'fake_booking_123' }), 800)
  )
}
