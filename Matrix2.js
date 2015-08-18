
var Matrix2 = Class({
  constructor: function() {
    this.Set(1,0,0,1);
  },

  Create:function( aa_ /*= 1.0*/, ab_ /*= 0*/, ba_ /*= 0*/, bb_ /*= 1.0*/ )
  {
      var m = new Matrix2();
      m.Set(aa_,ab_,ba_,bb_);
      return m;
  },

  Set:function( aa_ /*= 1.0*/, ab_ /*= 0*/, ba_ /*= 0*/, bb_ /*= 1.0*/ )
  {
      this.aa = GetDefaultArg(aa_,1);
      this.ab = GetDefaultArg(ab_,0);
      this.ba = GetDefaultArg(ba_,0);
      this.bb = GetDefaultArg(bb_,1);
  },

  Scale:function( s )
  {
      this.aa *= s;
      this.ab *= s;
      this.ba *= s;
      this.bb *= s;
  },
  Transpose:function( s )
  {
    var abt = this.ab;
    this.ab = this.ba;
    this.ba = abt;
  },

  Transform:function( m )
  {
      var r = new Matrix2();
      r.aa = aa * m.aa + ab * m.ba;
      r.ab = aa * m.ab + ab * m.bb;
      r.ba = ba * m.aa + bb * m.ba;
      r.bb = ba * m.ab + bb * m.bb;
      return r;
  },

  TransformVector:function( v )
  {
      var tv;
      tv.x = v.x * this.aa + v.y * this.ba;
      tv.y = v.x * this.ab + v.y * this.bb;
      return tv;
  },

});
