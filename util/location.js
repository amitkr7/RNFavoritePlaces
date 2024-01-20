const GOOGLE_API_KEY = 'AIzaSyCTCDNDtYPCpAD0FaKgHgdzCjMN1QUHnt4';

export const getMapPreview = (lat, lng) => {
  const imagePreviewUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lng}&zoom=14&size=400x200&maptype=roadmap
&markers=color:red%7Clabel:C%7C${lat},${lng}
&key=${GOOGLE_API_KEY}&signature=YOUR_SIGNATURE`;
  return `https://d2qpjo1h61iqqh.cloudfront.net/image/49_paisa_per_lakh_hr_hi.jpg`;
};
