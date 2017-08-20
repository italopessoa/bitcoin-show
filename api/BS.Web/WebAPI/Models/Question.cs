namespace WebAPI.Models
{
    public class Question
    {
        public int Id { get; set; }

        public string Text { get; set; }
        
        /// <summary>
        /// [
        ///    {
        ///       "number":"1",
        ///       "text":"option 1"
        ///     },
        ///    {
        ///       "number":"n",
        ///       "text":"option n"
        ///     }
        /// ]
        /// </summary>
        public Option[] Options { get; set; }
        // public string Options { get; set; }

        /// <summary>
        /// { "number": "n" }
        /// </summary>
        public byte Answer { get; set; }

        /// <summary>
        /// <para>e: easy</para>
        /// <para>m: medium</para>
        /// <para>h: hard</para><
        /// </summary>
        public char Level { get; set; }
    }
}
