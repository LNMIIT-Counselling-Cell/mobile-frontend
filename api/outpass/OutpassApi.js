export const GenerateOutpassApi = async (token, hostel, room, purpose, transport, fromTime, toTime) => {
  await fetch("http://localhost:5000/generateoutpass", {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token,
    },
    body: JSON.stringify({
      hostel: hostel,
      roomno: room,
      purpose: purpose,
      transport: transport,
      from_time: fromTime,
      to_time: toTime
    })
  })
    .then(response => response.json())
    .then(result => {
      console.log("res ---- ", result)
      return result.body
    })
    .catch(err => console.log("error ---- ", err))
}