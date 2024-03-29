import { useEffect, useState } from "react";
import Snowfall from "react-snowfall";

const SnowFallHeader = () => {
  const [showSnow, setShowSnow] = useState(false);

  useEffect(() => {
    const date = new Date();
    const month = date.getMonth() + 1; // +1 is because jan = 0
    setShowSnow(month < 3 || month >= 11);
  }, [])

  if (showSnow) {
    return (
      <Snowfall color={'#fff'} radius={[0.2, 0.5]} />

    )
  }
  else {
    return null;
  }
}

export default SnowFallHeader;