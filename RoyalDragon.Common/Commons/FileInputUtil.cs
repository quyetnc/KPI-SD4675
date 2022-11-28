using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RoyalDragon.Common.Commons
{
    public class FileInputUtil
    {
        public static FileInfo GetFileInfo ( string directory, string file )
        {
            var rootDir = GetRootDirectory().FullName + "/wwwroot";

            return new FileInfo(Path.Combine(rootDir, directory, file));
        }
        public static FileInfo GetFileExportFormInfo (string file )
        {
            var rootDir = GetRootDirectory().FullName + "/ExportForms";

            return new FileInfo(Path.Combine(rootDir, file));
        }
        public static DirectoryInfo GetRootDirectory ( )
        {
            var currentDir = AppDomain.CurrentDomain.BaseDirectory;

            // debug path
            if (currentDir.Contains("bin"))
            {
                var tryTime = 5;
                while (!currentDir.EndsWith("bin") && tryTime-- > 0)
                {
                    currentDir = Directory.GetParent(currentDir).FullName.TrimEnd('\\');
                }
                return new DirectoryInfo(currentDir).Parent;
            }

            // publish path
            return new DirectoryInfo(currentDir);

        }
    }
}
