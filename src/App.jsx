import { Haptics, ImpactStyle } from "@capacitor/haptics";

export default function App() {
  const vibrate = async () => {
    await Haptics.impact({ style: ImpactStyle.Medium });
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Mobile Test App</h1>

      <button
        onClick={vibrate}
        style={{
          padding: "12px 16px",
          fontSize: 16,
          marginTop: 20
        }}
      >
        Native Haptic Test
      </button>
    </div>
  );
}
