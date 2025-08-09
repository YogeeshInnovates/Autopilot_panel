import usb.core

def scan_dfu():
    dfu_devices = []
    try:
        for dev in usb.core.find(find_all=True):
            is_dfu = False
            try:
                for cfg in dev:
                    for intf in cfg:
                        if intf.bInterfaceClass == 0xFE and intf.bInterfaceSubClass == 0x01:
                            is_dfu = True
                            break
                    if is_dfu:
                        break
            except Exception:
                pass
            if is_dfu:
                dfu_devices.append({
                    "type": "dfu",
                    "vendor_id": int(dev.idVendor),
                    "product_id": int(dev.idProduct),
                    "manufacturer": None,
                    "product": None,
                    "serial": None,
                })
    except Exception as e:
        dfu_devices.append({
            "type": "dfu",
            "product": f"DFU scan error: {e}"
        })
    return dfu_devices
