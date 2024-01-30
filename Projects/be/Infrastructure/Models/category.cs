﻿using System;
using System.Collections.Generic;

namespace Infrastructur.Models;

public partial class category
{
    public int id { get; set; }

    public int? parent_category_id { get; set; }

    public bool is_bottom_level { get; set; }

    public string name { get; set; } = null!;

    public virtual ICollection<category> Inverseparent_category { get; set; } = new List<category>();

    public virtual category? parent_category { get; set; }

    public virtual ICollection<post> posts { get; set; } = new List<post>();
}
