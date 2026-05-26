export default function Map() {
    const goToMaps = () => {
        const url =
            "https://www.google.com/maps/dir/?api=1&destination=41.34511991545273, 19.762055167049983";
        window.open(url, "_blank");
    };

    return (
        <div style={{ width: "100%", marginBottom: "48px", marginTop: "40px",position: "relative" }}>
            {/* MAP */}
            <div style={{ height: "400px" }}>
                <iframe
                    width="100%"
                    height="100%"
                    style={{ border: 0, borderRadius: "12px" }}
                    loading="lazy"
                    allowFullScreen
                    src="https://maps.google.com/maps?q=41.34511991545273,19.762055167049983&z=15&output=embed"
                />
            </div>

            {/* BUTTON */}
            <button
                onClick={goToMaps}
                style={{
                    position: "absolute",
                    bottom: "-55px",
                    left: "50%",
                    transform: "translateX(-50%)",
                    margin: "12px 12px 12px 12px",
                    padding: "10px 16px",
                    borderRadius: "8px",
                    border: "none",
                    background: "#0F2A52",
                    color: "white",
                    cursor: "pointer",
                }}
            >
                Navigate with Maps
            </button>
        </div>
    );
}