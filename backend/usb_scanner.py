import usb.core
import usb.util

def scan_usb():
    devices = []
    try:
        # Find all USB devices
        all_devices = usb.core.find(find_all=True)
        for dev in all_devices:
            info = {
                "type": "usb",
                "vendor_id": hex(dev.idVendor),
                "product_id": hex(dev.idProduct),
                "manufacturer": None,
                "product": None,
                "serial": None,
            }
            try:
                # Safely get USB string descriptors if available
                if dev.iManufacturer:
                    info["manufacturer"] = usb.util.get_string(dev, dev.iManufacturer)
                if dev.iProduct:
                    info["product"] = usb.util.get_string(dev, dev.iProduct)
                if dev.iSerialNumber:
                    info["serial"] = usb.util.get_string(dev, dev.iSerialNumber)
            except usb.core.USBError:
                # Ignore USB string reading errors (e.g. permission issues)
                pass
            devices.append(info)
    except Exception as e:
        # Return error info inside list to keep return type consistent
        devices.append({
            "type": "usb",
            "product": f"USB scan error: {str(e)}"
        })
    return devices
