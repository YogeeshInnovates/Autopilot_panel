# import usb.core
# import usb.util

# def scan_usb():
#     devices = []
#     try:
#         # Find all USB devices
#         all_devices = usb.core.find(find_all=True)
#         for dev in all_devices:
#             info = {
#                 "type": "usb",
#                 "vendor_id": hex(dev.idVendor),
#                 "product_id": hex(dev.idProduct),
#                 "manufacturer": None,
#                 "product": None,
#                 "serial": None,
#             }
#             try:
#                 # Safely get USB string descriptors if available
#                 if dev.iManufacturer:
#                     info["manufacturer"] = usb.util.get_string(dev, dev.iManufacturer)
#                 if dev.iProduct:
#                     info["product"] = usb.util.get_string(dev, dev.iProduct)
#                 if dev.iSerialNumber:
#                     info["serial"] = usb.util.get_string(dev, dev.iSerialNumber)
#             except usb.core.USBError:
#                 # Ignore USB string reading errors (e.g. permission issues)
#                 pass
#             devices.append(info)
#     except Exception as e:
#         # Return error info inside list to keep return type consistent
#         devices.append({
#             "type": "usb",
#             "product": f"USB scan error: {str(e)}"
#         })
#     return devices



import usb.core
import usb.util
import serial.tools.list_ports

def scan_usb():
    devices = []

    # ---------- USB Devices (PyUSB) ----------
    try:
        all_devices = usb.core.find(find_all=True)
        for dev in all_devices:
            info = {
                "type": "usb",
                "vendor_id": dev.idVendor,
"product_id": dev.idProduct,

                "manufacturer": None,
                "product": None,
                "serial": None,
            }
            try:
                if dev.iManufacturer:
                    info["manufacturer"] = usb.util.get_string(dev, dev.iManufacturer)
                if dev.iProduct:
                    info["product"] = usb.util.get_string(dev, dev.iProduct)
                if dev.iSerialNumber:
                    info["serial"] = usb.util.get_string(dev, dev.iSerialNumber)
            except usb.core.USBError:
                pass
            devices.append(info)
    except Exception as e:
        devices.append({
            "type": "usb",
            "product": f"USB scan error: {str(e)}"
        })

    # ---------- Serial Ports (PySerial) ----------
    try:
        ports = serial.tools.list_ports.comports()
        for port in ports:
            info = {
                "type": "serial",
                "vendor_id": port.vid if port.vid is not None else None,
"product_id": port.pid if port.pid is not None else None,

                "manufacturer": port.manufacturer,
                "product": port.product,
                "serial": port.serial_number,
                "address": port.device,
                "name": port.name
            }
            devices.append(info)
    except Exception as e:
        devices.append({
            "type": "serial",
            "product": f"Serial scan error: {str(e)}"
        })

    return devices
