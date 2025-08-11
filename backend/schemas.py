from pydantic import BaseModel
from typing import Optional

class DeviceInfo(BaseModel):
    type: str                # "usb", "bluetooth", "dfu"
    vendor_id: Optional[int] = None
    product_id: Optional[int] = None
    manufacturer: Optional[str] = None
    product: Optional[str] = None
    serial: Optional[str] = None
    address: Optional[str] = None  # Bluetooth address
    name: Optional[str] = None

class PairRequest(BaseModel):
    address: str


class BluetoothConnectRequest(BaseModel):
    address: str
