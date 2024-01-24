const GOOGLE_API_KEY = 'AIzaSyCTCDNDtYPCpAD0FaKgHgdzCjMN1QUHnt4';

export const getMapPreview = (lat, lng) => {
  const imagePreviewUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lng}&zoom=14&size=400x200&maptype=roadmap
&markers=color:red%7Clabel:C%7C${lat},${lng}
&key=${GOOGLE_API_KEY}&signature=YOUR_SIGNATURE`;
  return `https://d2qpjo1h61iqqh.cloudfront.net/image/49_paisa_per_lakh_hr_hi.jpg`;
};

export const getAddress = async (lat, lng) => {
  const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${GOOGLE_API_KEY}`;
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error('Falied to fetch address');
  }

  const data = await response.json();
  const address = data?.results[0]?.formatted_address;
  return 'Pune, MH, India';
};
