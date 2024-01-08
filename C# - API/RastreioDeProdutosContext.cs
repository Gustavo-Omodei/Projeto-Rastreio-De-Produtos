using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using Rastreio.Models;

namespace Rastreio;

public partial class RastreioDeProdutosContext : DbContext
{
    public RastreioDeProdutosContext()
    {
    }

    public RastreioDeProdutosContext(DbContextOptions<RastreioDeProdutosContext> options)
        : base(options)
    {
    }

    public virtual DbSet<Cliente> Clientes { get; set; }

    public virtual DbSet<Produto> Produtos { get; set; }

    public virtual DbSet<Usuario> Usuario { get; set; }
    public virtual DbSet<Rastreamento> Rastreamentos { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
        => optionsBuilder.UseSqlServer("Data Source=localhost;initial Catalog=Rastreio_De_Produtos;User ID=adm;password=senha1234@;language=Portuguese;Trusted_Connection=True;TrustServerCertificate=True;");

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Cliente>(entity =>
        {
            entity.HasKey(e => e.Cpf).HasName("PK__Cliente__3213E83F268106F2");

            entity.ToTable("Cliente");

            entity.Property(e => e.Cpf)
                .HasMaxLength(11)
                .IsUnicode(false)
                .HasColumnName("cpf");
            entity.Property(e => e.Endereco)
                .HasMaxLength(200)
                .IsUnicode(false)
                .HasColumnName("endereco");
            entity.Property(e => e.Nome)
                .HasMaxLength(100)
                .IsUnicode(false)
                .HasColumnName("nome");
        });

        modelBuilder.Entity<Produto>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__Produtos__3213E83F9751776E");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.StatusRastreamento)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("status_Rastreamento");
            entity.Property(e => e.Tipo)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("tipo");
            entity.Property(e => e.Valor)
                .HasColumnType("decimal(18, 0)")
                .HasColumnName("valor");
        });

        modelBuilder.Entity<Rastreamento>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__Rastream__3213E83FF95CEE7F");

            entity.ToTable("Rastreamento");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.DataEvento).HasColumnType("datetime");
            entity.Property(e => e.FkCliente).HasColumnName("fk_Cliente");
            entity.Property(e => e.StatusEvento)
                .HasMaxLength(100)
                .IsUnicode(false);

            entity.HasOne(d => d.FkClienteNavigation).WithMany(p => p.Rastreamentos)
                .HasForeignKey(d => d.FkCliente)
                .HasConstraintName("FK__Rastreame__fk_Pr__3B75D760");
        });

        modelBuilder.Entity<Usuario>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__Usuario__3213E83F4B00DA12");

            entity.ToTable("Usuario");

            entity.Property(e => e.Username)
                .HasMaxLength(30)
                .IsUnicode(false)
                .HasColumnName("Username");
            entity.Property(e => e.Senha)
                .HasMaxLength(15)
                .IsUnicode(false)
                .HasColumnName("Senha");
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
