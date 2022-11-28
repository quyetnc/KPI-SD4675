using System;
using System.Drawing;
using System.IO;

namespace RoyalDragon.Model.Cdn
{
    public class ImageBase64Model
    {
        public string Base64Image { get; set; }

        public ImageBase64Model(string base64Image)
        {
            Base64Image = base64Image;
        }

    }
}