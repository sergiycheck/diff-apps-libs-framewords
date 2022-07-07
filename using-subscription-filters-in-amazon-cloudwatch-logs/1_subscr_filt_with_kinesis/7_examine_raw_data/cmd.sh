#!/bin/sh

data="H4sIAAAAAAAAADXOTwuCQBCH4a+yzFkC6Y+wtwjrkCVk0CEiNp10SHdlZywi+u5h1vFlfjDPCxpkNiXuny2ChkW63e/S5LyJs2y+iiEA97Do+0vtuuJhJK8SVzIEULty5V3XgoahMvFomiG5u3DuqRVydkm1oGfQx9N3F9/RSp8voGKYCzXIYpoWdDibRmE0CcfjSTgN/rwecEjUj6d+PK0WFeY3sqWq0NRSKXdVBbKQNf1ntSaLTKz4SxvB+/T+AGhHfLXyAAAA"
echo -n $data | base64 -d | zcat
