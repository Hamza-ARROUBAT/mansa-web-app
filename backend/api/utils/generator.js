const id = () => {
  const now = String(Date.now());
  const middlePos = Math.ceil(now.length / 2);
  return `${now.substring(0, middlePos)}${now.substring(middlePos)}`;
};

const userId = () => {
  const now = String(Date.now());
  const middlePos = Math.ceil(now.length / 2);
  return `${now.substring(middlePos - 1)}`;
};

const otpCode = () => {
  const now = String(Date.now());
  const middlePos = Math.ceil(now.length / 2);
  return `${now.substring(middlePos)}`;
};

module.exports = {
  id,
  userId,
  otpCode,
};
